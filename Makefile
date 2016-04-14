.PHONY: distro

name=wecook
user=root
node=root@digitalocean-prod-0
version=0.0.1

skyraid_dir=$(CURDIR)/../skyraid
skyraid_webmachine_www_dir=${skyraid_dir}/apps/skyraid_webmachine/priv/www

init:
	bower install
	npm install

clean:
	grunt clean

build:
	grunt build

stage:
	-rm -rf $(CURDIR)/app/bower_components
	ln -s $(CURDIR)/bower_components $(CURDIR)/app/bower_components
	rm -f ${skyraid_webmachine_www_dir}
	ln -s $(CURDIR)/app ${skyraid_webmachine_www_dir}

distro-clean:
	-rm -rf distro

distro:
	ls dist
	-mkdir distro
	-rm $(name)
	cp -r app/data dist/data
	cp -r dist $(name)
	zip -r distro/$(name).zip $(name) > /dev/null
	rm -rf $(name)

deploy: build distro-clean distro
	# Remove previous release if it exist
	-ssh $(node) 'rm -rf $(name)'
	# Upload new release
	scp ./distro/$(name).zip $(node):~
	# Unzip the new release
	ssh $(node) 'unzip $(name)' > /dev/null
	# Remove uploaded zip file
	ssh $(node) 'rm $(name).zip'
	# Set the doc root to the new release
	-ssh $(node) 'rm -rf skyraid/lib/skyraid_webmachine-*/priv/www'
	-ssh $(node) 'ln -s ~/$(name) skyraid/lib/skyraid_webmachine-$(version)/priv/www'
