<p>
    <strong>First Name</strong>
        <%= @user.first_name %>
</p>

<p>
    <strong><%= I18n.translate :last_name </strong>
    <%= user.last_name %>
</p>

<p>
    <strong><%= User.human_attribute_name(:email) %></strong>
    <%= @user.email %>
</p>

<%= link_to 'Edit', edit_user_path(@user) %> |
<%= link_to "Back", users_path %>
