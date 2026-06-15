# nu.py
# Reads nu.txt and prints each line
# Simulates exterior input for controls branch

def read_nu(file_path="nu.txt"):
    try:
        with open(file_path, "r") as f:
            for line in f:
                print("NU note:", line.strip())
    except FileNotFoundError:
        print("nu.txt not found")

def enable_zoom(level=1.0):
    print(f"Zoom enabled at level {level}")

def enable_drag():
    print("Drag rotation enabled")

def reset_view():
    print("View reset to default position")

if __name__ == "__main__":
    read_nu()
    enable_zoom(1.5)
    enable_drag()
    reset_view()

# comments added for readability
# added error handling for missing nu.txt
# adjusted zoom sensitivity
# cleaned up code structure
