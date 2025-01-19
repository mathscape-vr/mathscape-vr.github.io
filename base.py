# List to store all registered users
users = []

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __str__(self):
        return f"User(Username: {self.username})"


class UserManager:
    def register(self, username, password):
        # Check if the username is already registered
        if any(user.username == username for user in users):
            print("Error: Username is already taken.")
            return False
        # Create and store the new user
        user = User(username, password)
        users.append(user)
        print(f"Registration successful for {username}!")
        return True

    def login(self, username, password):
        # Find a user matching the username and password
        user = next((user for user in users if user.username == username and user.password == password), None)
        if user:
            print(f"Login successful! Welcome, {user.username}.")
            return user
        else:
            print("Error: Invalid username or password.")
            return None

    def list_users(self):
        # List all registered users
        if not users:
            print("No users are registered.")
        else:
            print("Registered Users:")
            for user in users:
                print(user)


# Example Usage
if __name__ == "__main__":
    manager = UserManager()

    # Register new users
    manager.register("Alice", "password123")
    manager.register("Bob", "securepass")

    # Attempt to register a duplicate username
    manager.register("Alice", "charliepassword")

    # Log in with valid credentials
    manager.login("Alice", "password123")

    # Log in with invalid credentials
    manager.login("Bob", "wrongpassword")

    # List all users
    manager.list_users()
