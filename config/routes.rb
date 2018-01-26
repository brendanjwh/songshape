Rails.application.routes.draw do
  root(to: "client#client")
  root(to: "api#v1")
end
