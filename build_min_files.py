from minify_tools.jsmin import jsmin
from minify_tools.cssmin import compress
import datetime

date = datetime.date.today()
year = date.strftime("%Y")

files = [
    "simple/simple.js", # Simple.js Library

    "simple/simple.animExt.js", # Simple.AnimExt.js Library
    "simple/simple.animExt.css", # Simple.AnimExt.css Library

    "custom/custom.css", # Custom.css Library
    "custom/custom.modal.css" # Custom.Modal.css Library
]

def add_copyright(filename):
    return f"/* {filename.split('/')[1]} // copyright (c) kgsensei {year} // https://dev.kgsensei.dev */\n"

def css_minify(filename):
    with open(filename, 'r') as file:
        css = compress(file.read())
        
        newFile = filename.split('/')[1].split('.')

        output = open(".".join(newFile[:-1]) + ".min." + newFile[-1], 'w')
        output.write(add_copyright(filename) + css)

        output.close()

        file.close()

def js_minify(filename):
    with open(filename, 'r') as file:
        js = jsmin(file.read()).replace('\n', ';')
        
        newFile = filename.split('/')[1].split('.')

        output = open(".".join(newFile[:-1]) + ".min." + newFile[-1], 'w')
        output.write(add_copyright(filename) + js)

        output.close()

        file.close()

for file in files:
    if file.split('.')[-1] == "css":
        print("> Running CSS Minify on " + file)
        css_minify(file)
    else:
        print("> Running JS_ Minify on " + file)
        js_minify(file)
