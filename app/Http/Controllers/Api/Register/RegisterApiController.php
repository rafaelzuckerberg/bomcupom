<?php

namespace App\Http\Controllers\Api\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

use App\User;
use App\Models\Customer;

class RegisterApiController extends Controller
{
    
    public function index()
    {
        //
    }

    
    public function store(Request $request)
    {
        $user = User::create([
            'name'      =>      $request['name'],
            'email'     =>      $request['email'],
            'password'  =>      Hash::make($request['password']),
            'status'    =>      2,
            'profile'   =>      2 
        ]);

        if($user)
            $customer = Customer::create([
                'date_birth'    =>      date('Y-m-d h:i:s', strtotime($request['date_birth'])),
                'genre'         =>      (int)$request['genre'],
                'user_id'       =>      $user->id
            ]);

            if($customer) 
                return response()->json(['success' => true, 'message' => 'Cliente cadastrado com sucesso'], 201); 
                else 
        
                return response()->json(['success' => false, 'message' => 'Não foi possível cadastrar cliente.'], 401); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
