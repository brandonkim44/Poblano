class Api::StoresController < ApplicationController

    def create
        @store = User.new(store_params)

        if @store.save
            render :show
        else
            render json: @store.errors.full_messages, status: 401
        end
    end

    private

    def store_params
        params.require(:store).permit()
    end
end