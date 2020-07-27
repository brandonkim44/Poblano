class Api::OrdersController < ApplicationController

    def create
        @order = User.new(order_params)

        if @order.save
            render :show
        else
            render json: @order.errors.full_messages, status: 401
        end
    end

    private

    def order_params
        params.require(:order).permit(:username, :password)
    end
end