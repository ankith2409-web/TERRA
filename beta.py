# beta.py
# Reads beta.txt and prints earthquake marker details

def read_markers(file_path="beta.txt"):
    try:
        with open(file_path, "r") as f:
            for line in f:
                print("Marker:", line.strip())
    except FileNotFoundError:
        print("beta.txt not found")

def process_marker(line):
    # Example: "Bangalore, Magnitude 5.6, Depth 40km"
    parts = line.split(",")
    if len(parts) >= 3:
        location = parts[0].strip()
        magnitude = parts[1].strip()
        depth = parts[2].strip()
        print(f"Processed -> Location: {location}, {magnitude}, {depth}")

if __name__ == "__main__":
    try:
        with open("beta.txt", "r") as f:
            for line in f:
                read_line = line.strip()
                print("Raw:", read_line)
                process_marker(read_line)
    except FileNotFoundError:
        print("beta.txt not found")

