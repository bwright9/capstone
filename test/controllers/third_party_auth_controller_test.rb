require 'test_helper'

class ThirdPartyAuthControllerTest < ActionController::TestCase
  test "should get facebook" do
    get :facebook
    assert_response :success
  end

end
