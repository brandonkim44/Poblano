class User < ApplicationRecord

  attr_reader :password

  #why should there be no model validation for country / why conflicting with seed?
  validates :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :country, inclusion: { in: [true, false] }
  validates :email, presence: true, format: { with: /\A.+\@.+\..+\z/, message: "Please enter a valid email." }
  validates :phone_number, presence: true, length: { is: 10 }, format: { with: /\A^[0-9]{9,}$\z/, message: "Please enter a valid Phone number"}
  validates :phone_number, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true, format: { with: /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@$]).{2,}\z/, message: "Please enter a valid password" }

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)

    return @user if (@user && @user.is_password?(password))
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.class.generate_session_token
    self.save!
    self.session_token
  end

  has_many :orders,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Order

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

end