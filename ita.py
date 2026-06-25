# ita.py
# Reads ita.txt and prints each line
# Simulates exterior input for tooltips branch

def read_ita(file_path="ita.txt"):
    try:
        with open(file_path, "r") as f:
            for line in f:
                print("ITA note:", line.strip())
    except FileNotFoundError:
        print("ita.txt not found")

def add_tooltip(location, magnitude, depth):
    print(f"Tooltip -> {location}: Magnitude {magnitude}, Depth {depth} km")

if __name__ == "__main__":
    read_ita()
    add_tooltip("Bangalore", 5.6, 40)
    add_tooltip("Tokyo", 6.2, 30)

# ita branch complete
# added error handling for missing ita.txt
# adjusted tooltip print format
# comments added for readability
# cleaned up code structure
# ita branch complete
