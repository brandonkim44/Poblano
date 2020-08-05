class Api::MealsController < ApplicationController

    def index
        @meals = Meal.all
        render :index
    end

    def show
        @meal = Meal.find_by(id: params[:id])

        if @meal
            @ingredients = @meal.ingredients
            render :show
        else
            render json: ["Could not find meal"], status: 401
        end
    end

end