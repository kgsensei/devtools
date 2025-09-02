Array.from(gcn("hsl")).forEach(e => {
	const variable = e.getAttr("data-control");
	e.children[3].setAttr(
		"style",
		`background-color: var(${variable});`);
	e.ael("change", a => {
		const parent = a.target.parent();
		const hue = parent.children[0].val();
		const sat = parent.children[1].val();
		const lgh = parent.children[2].val();
		setVar(variable, `hsl(${hue}, ${sat}%, ${lgh}%)`);
		setVar(`${variable}-trans`, `hsla(${hue}, ${sat}%, ${lgh}%, 0.33)`);
	});
});

Array.from(gcn("single-control")).forEach(e => {
	const variable = e.getAttr("data-control");
	e.ael("change", a => {
		setVar(variable, `${a.target.val()}px`)
	});
});

function setVar(key, value) {
	document.documentElement.style.setProperty(key, value);
}

function getVar(key, default_) {
	return document.documentElement.style.getPropertyValue(key) || default_;
}

gid("export").ael("click", _ => {
	let exported_css = `:root {
	--color: ${getVar("--color", "hsl(0, 0%, 80%)")};
	--background: ${getVar("--background", "hsl(0, 0%, 13%)")};
	--background-secondary: ${getVar("--background-secondary", "hsl(0, 0%, 7%)")};
	--background-lighter: ${getVar("--lighter-background", "hsl(0, 0%, 60%)")};
	--font-family: ${getVar("--font", "Arial, sans-serif")};
	--normal-font-size: ${getVar("--normal-font-size", "16px")};
	--border-radius: ${getVar("--border-radius", "4px")};
	--spacing: ${getVar("--spacing", "16px")};
	--primary: ${getVar("--primary", "hsl(198, 50%, 40%)")};
	--primary-trans: ${getVar("--primary-trans", "hsla(198, 50%, 40%, 0.33)")};
	--danger: ${getVar("--danger", "hsl(0, 80%, 35%)")};
	--danger-trans: ${getVar("--danger-trans", "hsla(0, 80%, 35%, 0.33)")};
	--warning: ${getVar("--warning", "hsl(35, 65%, 35%)")};
	--warning-trans: ${getVar("--warning-trans", "hsla(35, 65%, 35%, 0.33)")};
	--success: ${getVar("--success", "hsl(143, 80%, 25%)")};
	--success-trans: ${getVar("--success-trans", "hsla(143, 80%, 25%, 0.33)")};
	--accent: ${getVar("--tint", "hsl(198, 50%, 20%)")};
	--accent-trans: ${getVar("--tint-trans", "hsla(198, 50%, 20%, 0.33)")};
	--h1-size: ${getVar("--h1-size", "26px")};
	--h2-size: ${getVar("--h2-size", "24px")};
	--h3-size: ${getVar("--h3-size", "22px")};
	--h4-size: ${getVar("--h4-size", "20px")};
	--h5-size: ${getVar("--h5-size", "18px")};
	--h6-size: ${getVar("--h6-size", "16px")};
}

*, *::before, *::after {
	box-sizing: border-box;
}

body {
	background-color: var(--background);
	color: var(--color);
	padding: 0;
	margin: 0;
}

.btn {
	background-color: var(--tc);
	border-radius: var(--border-radius);
	padding: calc(var(--spacing) / 3) var(--spacing);
	color: var(--color);
	cursor: pointer;
	border: none;
}

.bold { font-weight: bold; }
.font { font-family: var(--font-family); }
.normal { font-size: var(--normal-font-size); }
.danger { --tc: var(--danger); --tb: var(--danger-trans); }
.warning { --tc: var(--warning); --tb: var(--warning-trans); }
.success { --tc: var(--success); --tb: var(--success-trans); }
.primary { --tc: var(--primary); --tb: var(--primary-trans); }
.accent { --tc: var(--accent); --tb: var(--accent-trans); }

.h1, .h2, .h3, .h4, .h5, .h6 { margin: 0; }
.h1 { font-size: var(--h1-size); }
.h2 { font-size: var(--h2-size); }
.h3 { font-size: var(--h3-size); }
.h4 { font-size: var(--h4-size); }
.h5 { font-size: var(--h5-size); }
.h6 { font-size: var(--h6-size); }

input.input, textarea.input, select.input {
	padding: calc(var(--spacing) / 3) calc(var(--spacing) / 2);
	border: solid 1px var(--lighter-background);
	background-color: var(--background);
	border-radius: var(--border-radius);
	color: var(--color);
	outline: none;
}

.pseudotoast {
	border-radius: var(--border-radius);
	border: solid 1px var(--tc);
	background-color: var(--tb);
	padding: calc(var(--spacing) / 2) calc(var(--spacing));
}
`;
	gid("export_dialog_content").setHTML(exported_css);
	gid("export_dialog").show("flex");
});
