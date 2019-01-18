class AddColumnsToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :view, :string
    add_column :rooms, :size, :string
    add_column :rooms, :bed_type, :text
    add_column :rooms, :image, :string
    add_column :rooms, :description, :text
  end
end
