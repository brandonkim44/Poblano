class User < ApplicationRecord

  attr_reader :password

  validates :first_name, :last_name, :phone_number, :email, :country, :password_digest, :session_token, presence: true
  validates :phone_number, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user if (@user && BCrypt::Password.new(self.password_digest).is_password?(password))
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.class.generate_unique_session_token
    self.save!
    self.session_token
  end

  #Associations =>

  has_many :orders,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Orders

  # <=

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

end