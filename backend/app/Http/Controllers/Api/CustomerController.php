<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    /**
     * Get all customers
     */
    public function index(Request $request)
    {
        $query = Customer::query();

        if ($request->has('branch_id')) {
            $query->where('branch_id', $request->branch_id);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where('first_name', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
        }

        if ($request->has('is_active')) {
            $query->where('is_active', $request->is_active);
        }

        $customers = $query->paginate($request->per_page ?? 15);

        return response()->json($customers);
    }

    /**
     * Create new customer
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'branch_id' => 'required|exists:branches,id',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'nullable|email|unique:customers',
            'phone' => 'required|string|max:20|unique:customers',
            'gender' => 'nullable|in:male,female,other',
            'date_of_birth' => 'nullable|date',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'region' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $customer = Customer::create($request->validated());

        return response()->json([
            'message' => 'Customer created successfully',
            'data' => $customer,
        ], 201);
    }

    /**
     * Get single customer
     */
    public function show(Customer $customer)
    {
        return response()->json($customer->load(['appointments', 'sales', 'interactions', 'preferences']));
    }

    /**
     * Update customer
     */
    public function update(Request $request, Customer $customer)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:customers,email,' . $customer->id,
            'phone' => 'sometimes|string|max:20|unique:customers,phone,' . $customer->id,
            'gender' => 'sometimes|in:male,female,other',
            'date_of_birth' => 'sometimes|date',
            'address' => 'sometimes|string',
            'city' => 'sometimes|string',
            'region' => 'sometimes|string',
            'notes' => 'sometimes|string',
            'is_active' => 'sometimes|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $customer->update($request->validated());

        return response()->json([
            'message' => 'Customer updated successfully',
            'data' => $customer,
        ]);
    }

    /**
     * Delete customer
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json([
            'message' => 'Customer deleted successfully',
        ]);
    }
}
