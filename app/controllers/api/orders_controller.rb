class Api::OrdersController < ApplicationController

    def index
        @orders = Order.find_by(user_id: params[:user_id])
        render :index
    end

    def create
        @order = Order.new(order_params)
        @order.user_id = params[:user_id]
        if @order.save
            render :show
        else
            render json: @order.errors.full_messages, status: 401
        end
    end

    def destroy
        @order = Order.find_by(id: params[:id])
        if @order.user_id == current_user && @order.destroy
            redirect_to "/"
        else
            render json: @order.errors.full_messages, status: 404
        end
    end

    private

    def order_params
        params.require(:order).permit(:price, :details)
    end
end

#remember to pass store_id and user_id up in the form when a user creates an order, so the controller has access to these params