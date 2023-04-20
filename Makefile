install:
	npm install

lint:
	npx stylelint ./src/**/*.css
	npx stylelint ./src/**/*.scss
	npx htmlhint ./build/*.html

sass:
	npx sass ./src/scss/app.scss ./src/css/style.css

pug:
	npx pug ./src/index.pug --pretty -o ./build/

deploy:
	npx surge ./build/
