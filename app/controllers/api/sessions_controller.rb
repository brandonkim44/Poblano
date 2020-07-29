class Api::SessionsController < ApplicationController
    # before_action :ensure_logged_in, only: [:destroy]

    def create

        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["The email or password you entered isn't quite right."], status: 400
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ["No user logged in"], status: 404 
        end
    end
end