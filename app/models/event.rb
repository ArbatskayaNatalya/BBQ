class Event < ApplicationRecord
  belongs_to :user
  TITLE_MAX_LENGTH = 255

  validates :title, presence: true, length: { maximum: TITLE_MAX_LENGTH }
  validates :address, presence: true
  validates :datetime, presence: true
end
