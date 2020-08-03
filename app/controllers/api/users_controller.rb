class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: ["Something isn't quite right... Please look over your email, password, or phone number to make sure they're valid."], status: 401
        end
    end

    private

    def user_params
        permitted_params_hash = params.require(:user).permit(:firstName, :lastName, :email, :phoneNumber, :password, :country).to_h
        deep_snake_case_params!(permitted_params_hash)
    end
end