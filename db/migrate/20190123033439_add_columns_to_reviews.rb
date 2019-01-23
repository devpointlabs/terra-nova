class AddColumnsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :name, :string
    add_column :reviews, :location, :string
  end
end
