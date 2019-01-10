class RemoveRefIdFromRoom < ActiveRecord::Migration[5.2]
  def change
    remove_reference :rooms, :reservation, foreign_key: true
  end
end
