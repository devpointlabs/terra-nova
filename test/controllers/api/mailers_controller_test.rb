require 'test_helper'

class Api::MailersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_mailers_index_url
    assert_response :success
  end

  test "should get create" do
    get api_mailers_create_url
    assert_response :success
  end

end
