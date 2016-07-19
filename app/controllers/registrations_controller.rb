class RegistrationsController < Devise::RegistrationsController
	respond_to :json
	skip_before_action :verify_authenticity_token
	before_filter :sign_up_params, only: [:create]
	before_filter :account_update_params, only: [:update]

	def create
		super
		SignupMailer.new_signup(@user).deliver if @user
	end

	private 

	def sign_up_params
	  params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
	end

	def account_update_params
	  params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
	end
end