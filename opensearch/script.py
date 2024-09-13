import json
import sys

def convert_to_bulk(input_file, output_file, index_name):
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
      
        data = json.load(infile)
   
        for i, obj in enumerate(data):
 
            action = {"index": {"_index": index_name}}
            
            outfile.write(json.dumps(action) + '\n')
            outfile.write(json.dumps(obj) + '\n')
            


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <input_file> <output_file> <index_name>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    index_name = sys.argv[3]

    convert_to_bulk(input_file, output_file, index_name)
    print("Conversion completed.")