class RemoveReferencesFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_reference :reservations, :user, foreign_key: true
  end
end
