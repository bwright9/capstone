class PasswordsController < Devise::PasswordsController
	respond_to :json
	skip_before_action :verify_authenticity_token

  protected
  def after_sending_reset_password_instructions_path_for(resource_name)
  	root_path
  end
end