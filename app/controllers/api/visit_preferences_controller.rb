class Api::VisitPreferencesController < ApplicationController
  
  def show
  	render json: current_user.profile.visit_preference
  end


  def update
  	visit_preference = current_user.profile.visit_preference
  	if visit_preference.update(visit_preferences_params)
  		render json: visit_preference
  	else
  		render json: {message: 'visit preference failed to update'}, status: :bad_request
  	end

  end

  private

  def visit_preferences_params
  	params.require(:visit_preferences).permit(:food, :drinks, :coffee, :shops, :arts, :outdoors, :sights)
  end
end
