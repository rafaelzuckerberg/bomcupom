<?php

namespace App\Http\Controllers\Api\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Tymon\JWTAuth\Exceptions\JWTException;

use JWTAuth;
use App\User;


class LoginApiController extends Controller
{

    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null; 

        if (!$token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Email ou senha inválida',
            ], 401);
        }

        return response()->json([
            'success' => true,
            'token' => $token,
        ]);
    }


    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }

}
