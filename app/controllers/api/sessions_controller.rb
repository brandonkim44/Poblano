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
            if params[:user][:email] == ""
                render json: ["Email Required"], status: 400
            elsif !(params[:user][:email] =~ /\A.+\@.+\..+\z/)
                render json: ["Looks like an invalid email. Try again?"], status: 400
            elsif params[:user][:password] == ""
                render json: ["Password Required"], status: 400
            else
                render json: ["The email or password you entered isn't quite right. As a reminder, your password contains", "at least 8 characters | ABC | abc | 123 | !@%"], status: 400
            end
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