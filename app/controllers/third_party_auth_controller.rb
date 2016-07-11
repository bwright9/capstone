class ThirdPartyAuthController < ApplicationController
    skip_before_action :verify_authenticity_token

	def facebook
		# you need to implement the method below in your users model
		auth = params[:auth]
		@user = User.from_third_party_auth('facebook', auth)
		if @user.persisted?
			sign_in(@user, event: :authentication)
			render json: @user
		else
			render json: {errors: auth}, status: :unauthorized
		end
	end
end
