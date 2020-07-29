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
        case val
            when (val.is_a? Array)
                #recursive
                val.map {|v| deep_snake_case_params!(v) }
            when (val.is_a? Hash)
                #turns params into array, each ele is a key, delete the key, then replace it with snake_cased key
                val.keys.each do |k, v = val[k]|
                    val.delete k
                    snaked_key = k.underscore
                    val[snaked_key] = deep_snake_case_params!(v)
                end
            val
        else
            val
        end
    end

    # def ensure_logged_in
    #     redirect_to api_session_url unless logged_in? 
    # end
end