class Api::MealsController < ApplicationController

    def show
        @meal = Meal.find_by(meal_name: params[:meal][:meal_name])
        @ingredients = @meal.builds.where(meal_id: @meal.id)
        render :show
    end


end