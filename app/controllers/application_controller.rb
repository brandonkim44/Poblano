class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def deep_snake_case_params!(val)
        return val unless val.is_a? Hash
        new_hash = {}
        val.each do |k, v|
            snaked_key = k.underscore
            new_hash[snaked_key] = deep_snake_case_params!(v)
        end
        return new_hash
    end

    # def ensure_logged_in
    #     redirect_to api_session_url unless logged_in? 
    # end
end