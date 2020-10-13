import argparse
import os
parser = argparse.ArgumentParser("Find")
parser.add_argument("find", metavar="find", type=str, nargs=1, help="find a keyword")
args = parser.parse_args()
find = args.find[0]

found = []
for dname, dirs, files in os.walk("app"):
    filtered = [fname for fname in files if ".js" in fname or ".html" in fname]
    for fname in filtered:
        fpath = os.path.join(dname, fname)
        with open(fpath) as f:
            s = f.read()
        if find in s:
            found.append(fpath)
for f in found:
    print(f)