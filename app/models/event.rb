class Event < ApplicationRecord
  TITLE_MAX_LENGTH = 255

  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: { maximum: TITLE_MAX_LENGTH }
  validates :address, presence: true
  validates :datetime, presence: true
end
