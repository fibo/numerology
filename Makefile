.PHONY: numerology.js
numerology.js:
	grep '    ' README.md | sed -e 's/    //' > numerology.js
