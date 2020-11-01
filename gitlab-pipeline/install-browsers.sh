# if you don't want to include binaries in the repository, you can fetch them directly from a remote source
# wget https://github.com/webnicer/chrome-downloads/raw/master/x64.deb/google-chrome-stable_75.0.3770.80-1_amd64.deb

# Show current path
pwd

# Update information about available packages
apt-get update

# Install packages required by Chrome
apt-get install -y lsb-release libgtk-3-0 libappindicator3-1 xdg-utils libxss1 libnss3 libnspr4 libasound2 libappindicator1 fonts-liberation libgconf2-4 libxss1 xdg-utils libasound2

# Go to the gitlab-pipeline directory
cd gitlab-pipeline

# install Chrome browser
dpkg -i google-chrome*.deb

# Show Chrome version
google-chrome --version

# Install Firefox browser according to: https://itsfoss.com/firefox-quantum-ubuntu/
# Extract Firefox files to /opt directory
tar xjf ./firefox-82.0.2.tar.bz2 -C /opt/

# Create symbolic link to point Firefox binaries
ln -s /opt/firefox/firefox /usr/bin/firefox

# Show Firefox version
firefox --version

# If you want to use Selenium server, you need to install Java as well.
# The Selenium server is required by browsers which don't support a direct connection (cannot communicate with browsers directly).
# Chrome and Firefox support it and that's why Selenium Server is not required.
