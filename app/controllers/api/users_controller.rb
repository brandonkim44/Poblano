class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            email = user_params["email"]
            phone_number = user_params["phone_number"]
            debugger
            if User.find_by(email: email)
                render json: ["Email has already been taken"], status: 401
            elsif User.find_by(phone_number: phone_number)
                render json: ["Phone number has already been taken"], status: 401
            else
                render json: ["Something isn't quite right... Please look over your email, password, or phone number to make sure they're valid."], status: 401
            end
        end
    end

    private

    def user_params
        permitted_params_hash = params.require(:user).permit(:firstName, :lastName, :email, :phoneNumber, :password, :country).to_h
        deep_snake_case_params!(permitted_params_hash)
    end
end