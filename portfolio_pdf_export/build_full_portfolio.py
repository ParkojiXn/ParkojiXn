"""
build_full_portfolio.py - Runner delegating to generate_masterpiece_portfolio.py
Ensures full synchronization and strict sourcing from Knowledge_Portofolio.
"""
import subprocess
import sys
import os

if __name__ == "__main__":
    script = os.path.join(os.path.dirname(__file__), "generate_masterpiece_portfolio.py")
    res = subprocess.run([sys.executable, script])
    sys.exit(res.returncode)
