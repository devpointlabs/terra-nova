require 'test_helper'

class Api::RoomsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_rooms_index_url
    assert_response :success
  end

  test "should get show" do
    get api_rooms_show_url
    assert_response :success
  end

  test "should get create" do
    get api_rooms_create_url
    assert_response :success
  end

  test "should get update" do
    get api_rooms_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_rooms_destroy_url
    assert_response :success
  end

end
