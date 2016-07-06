class Api::ProfilesController < ApplicationController
	before_action :user_instance
	before_action :profile_instance, except: [:index, :create]
 	
 	def index
 		render json: current_user.profile
 	end
 	
 	def create
 		profile = @user.profiles.new(profile_params)
 		if profile.save
 			render json: profile
 		else
 			render json: { errors: profile.errors.full_messages	}
 		end
 	end
 	
 	def update
 		if @profile.update(profile_params)
 			render json: @profile
 		else
 			render json: { errors: @profile.errors.full_messages}
 		end
 	end
 	
 	def destroy
 		@profile.destroy
 		render json: true
 	end
 	
 	private
 	
 	def profile_params
 		params.require(:profile).permit(:current_city, :current_state, :current_neighborhood,
 																		:current_zipcode, :age)
 	end
 	
 	def user_instance
 		@user = User.find_by(id: params[:user_id])
 	end
 	
 	def profile_instance
 		@profile = @user.profiles.find_by(id: params[:id])
 	end
end