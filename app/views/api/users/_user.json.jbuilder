Jbuilder.key_format camelize: :lower

json.set! user.id do
    json.extract! user, :id, :first_name
end