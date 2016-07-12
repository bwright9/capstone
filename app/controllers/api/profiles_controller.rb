class Api::ProfilesController < ApplicationController
	# before_action :user_instance, except: [:index]
	# before_action :profile_instance, except: [:index, :create, :show, :create]
 	
 	def index
 		render json: current_user.profile
 	end

 	def show
    render json: { profile: current_user.profile }
 	end
 	
 	def create
 		profile = Profile.new(profile_params)
 		if profile.save
 			render json: profile
 		else
 			render json: { errors: profile.errors.full_messages	}
 		end
 	end
 	
 	def update
 		@profile = Profile.find_by(user_id: current_user.id)
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
 																		:current_zipcode, :age, :user_id)
 	end

 	def profile
    @profile = Profile.find_by(user_id: params[:id])
 	end
 	
 	def user_instance
 		@user = User.find_by(id: params[:id])
 	end
 	
 	def profile_instance
 		@profile = @user.profiles.find_by(id: params[:id])
 	end
end