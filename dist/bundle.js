(() => {
	"use strict";
	function t(t, e, n) {
		var r = n.value;
		return {
			configurable: !0,
			get: function () {
				return r.bind(this);
			},
		};
	}
	var e;
	!(function (t) {
		(t[(t.Active = 0)] = "Active"), (t[(t.Finished = 1)] = "Finished");
	})(e || (e = {}));
	var n,
		r = function (t, e, n, r, o) {
			(this.id = t),
				(this.title = e),
				(this.description = n),
				(this.people = r),
				(this.status = o);
		},
		o =
			((n = function (t, e) {
				return (
					(n =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (t, e) {
								t.__proto__ = e;
							}) ||
						function (t, e) {
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n]);
						}),
					n(t, e)
				);
			}),
			function (t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError(
						"Class extends value " +
							String(e) +
							" is not a constructor or null"
					);
				function r() {
					this.constructor = t;
				}
				n(t, e),
					(t.prototype =
						null === e
							? Object.create(e)
							: ((r.prototype = e.prototype), new r()));
			}),
		i = (function (t) {
			function n() {
				var e = t.call(this) || this;
				return (e.projects = []), e;
			}
			return (
				o(n, t),
				(n.getInstance = function () {
					return (
						this.instance || (this.instance = new n()),
						this.instance
					);
				}),
				(n.prototype.addProject = function (t, n, o) {
					var i = new r(Math.random().toString(), t, n, o, e.Active);
					this.projects.push(i), this.updateListeners();
				}),
				(n.prototype.moveProject = function (t, e) {
					var n = this.projects.find(function (e) {
						return e.id === t;
					});
					n && n.status !== e && (n.status = e),
						this.updateListeners();
				}),
				(n.prototype.updateListeners = function () {
					for (var t = 0, e = this.listeners; t < e.length; t++)
						(0, e[t])(this.projects.slice());
				}),
				n
			);
		})(
			(function () {
				function t() {
					this.listeners = [];
				}
				return (
					(t.prototype.addListener = function (t) {
						this.listeners.push(t);
					}),
					t
				);
			})()
		).getInstance();
	function s(t) {
		var e = !0;
		return (
			t.required && (e = e && 0 !== t.value.toString().trim().length),
			null != t.minLength &&
				"string" == typeof t.value &&
				(e = e && t.value.length > t.minLength),
			null != t.maxLength &&
				"string" == typeof t.value &&
				(e = e && t.value.length < t.maxLength),
			null != t.min &&
				"number" == typeof t.value &&
				(e = e && t.value >= t.min),
			null != t.max &&
				"number" == typeof t.value &&
				(e = e && t.value < t.max),
			e
		);
	}
	var l = (function () {
			function t(t, e, n, r) {
				(this.templateElement = document.getElementById(t)),
					(this.hostElement = document.getElementById(e));
				var o = document.importNode(this.templateElement.content, !0);
				(this.element = o.firstElementChild),
					r && (this.element.id = r),
					this.attach(n);
			}
			return (
				(t.prototype.attach = function (t) {
					this.hostElement.insertAdjacentElement(
						t ? "afterbegin" : "beforeend",
						this.element
					);
				}),
				t
			);
		})(),
		a = (function () {
			var t = function (e, n) {
				return (
					(t =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (t, e) {
								t.__proto__ = e;
							}) ||
						function (t, e) {
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n]);
						}),
					t(e, n)
				);
			};
			return function (e, n) {
				if ("function" != typeof n && null !== n)
					throw new TypeError(
						"Class extends value " +
							String(n) +
							" is not a constructor or null"
					);
				function r() {
					this.constructor = e;
				}
				t(e, n),
					(e.prototype =
						null === n
							? Object.create(n)
							: ((r.prototype = n.prototype), new r()));
			};
		})(),
		c = (function (e) {
			function n() {
				var t =
					e.call(this, "project-input", "app", !0, "user-input") ||
					this;
				return (
					(t.titleInputElement = t.element.querySelector("#title")),
					(t.descriptionInputElement =
						t.element.querySelector("#description")),
					(t.peopleElement = t.element.querySelector("#people")),
					t.configure(),
					t
				);
			}
			return (
				a(n, e),
				(n.prototype.configure = function () {
					this.element.addEventListener("submit", this.submitHandler);
				}),
				(n.prototype.renderContent = function () {}),
				(n.prototype.gatherUserInput = function () {
					var t = this.titleInputElement.value,
						e = this.descriptionInputElement.value,
						n = this.peopleElement.value,
						r = { value: e, required: !0, minLength: 5 },
						o = { value: +n, required: !0, min: 1 };
					return s({ value: t, required: !0 }) && s(r) && s(o)
						? [t, e, +n]
						: void alert("Invalid input, please try again!");
				}),
				(n.prototype.clearInputs = function () {
					(this.titleInputElement.value = ""),
						(this.descriptionInputElement.value = ""),
						(this.peopleElement.value = "");
				}),
				(n.prototype.submitHandler = function (t) {
					t.preventDefault();
					var e = this.gatherUserInput();
					if (Array.isArray(e)) {
						var n = e[0],
							r = e[1],
							o = e[2];
						i.addProject(n, r, o), this.clearInputs();
					}
				}),
				(function (t, e, n, r) {
					var o,
						i = arguments.length,
						s =
							i < 3
								? e
								: null === r
								? (r = Object.getOwnPropertyDescriptor(e, n))
								: r;
					if (
						"object" == typeof Reflect &&
						"function" == typeof Reflect.decorate
					)
						s = Reflect.decorate(t, e, n, r);
					else
						for (var l = t.length - 1; l >= 0; l--)
							(o = t[l]) &&
								(s =
									(i < 3
										? o(s)
										: i > 3
										? o(e, n, s)
										: o(e, n)) || s);
					i > 3 && s && Object.defineProperty(e, n, s);
				})([t], n.prototype, "submitHandler", null),
				n
			);
		})(l),
		u = (function () {
			var t = function (e, n) {
				return (
					(t =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (t, e) {
								t.__proto__ = e;
							}) ||
						function (t, e) {
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n]);
						}),
					t(e, n)
				);
			};
			return function (e, n) {
				if ("function" != typeof n && null !== n)
					throw new TypeError(
						"Class extends value " +
							String(n) +
							" is not a constructor or null"
					);
				function r() {
					this.constructor = e;
				}
				t(e, n),
					(e.prototype =
						null === n
							? Object.create(n)
							: ((r.prototype = n.prototype), new r()));
			};
		})(),
		p = (function (e) {
			function n(t, n) {
				var r = e.call(this, "single-project", t, !1, n.id) || this;
				return (r.project = n), r.configure(), r.renderContent(), r;
			}
			return (
				u(n, e),
				Object.defineProperty(n.prototype, "persons", {
					get: function () {
						return 1 === this.project.people
							? "1 person"
							: this.project.people + " persons";
					},
					enumerable: !1,
					configurable: !0,
				}),
				(n.prototype.dragStartHandler = function (t) {
					t.dataTransfer.setData("text/plain", this.project.id),
						(t.dataTransfer.effectAllowed = "move");
				}),
				(n.prototype.dragEndHandler = function (t) {}),
				(n.prototype.configure = function () {
					this.element.addEventListener(
						"dragstart",
						this.dragStartHandler
					),
						this.element.addEventListener(
							"dragend",
							this.dragEndHandler
						);
				}),
				(n.prototype.renderContent = function () {
					(this.element.querySelector("h2").textContent =
						this.project.title),
						(this.element.querySelector("h3").textContent =
							this.persons + " assigned"),
						(this.element.querySelector("p").textContent =
							this.project.description);
				}),
				(function (t, e, n, r) {
					var o,
						i = arguments.length,
						s =
							i < 3
								? e
								: null === r
								? (r = Object.getOwnPropertyDescriptor(e, n))
								: r;
					if (
						"object" == typeof Reflect &&
						"function" == typeof Reflect.decorate
					)
						s = Reflect.decorate(t, e, n, r);
					else
						for (var l = t.length - 1; l >= 0; l--)
							(o = t[l]) &&
								(s =
									(i < 3
										? o(s)
										: i > 3
										? o(e, n, s)
										: o(e, n)) || s);
					i > 3 && s && Object.defineProperty(e, n, s);
				})([t], n.prototype, "dragStartHandler", null),
				n
			);
		})(l),
		f = (function () {
			var t = function (e, n) {
				return (
					(t =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (t, e) {
								t.__proto__ = e;
							}) ||
						function (t, e) {
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n]);
						}),
					t(e, n)
				);
			};
			return function (e, n) {
				if ("function" != typeof n && null !== n)
					throw new TypeError(
						"Class extends value " +
							String(n) +
							" is not a constructor or null"
					);
				function r() {
					this.constructor = e;
				}
				t(e, n),
					(e.prototype =
						null === n
							? Object.create(n)
							: ((r.prototype = n.prototype), new r()));
			};
		})(),
		d = function (t, e, n, r) {
			var o,
				i = arguments.length,
				s =
					i < 3
						? e
						: null === r
						? (r = Object.getOwnPropertyDescriptor(e, n))
						: r;
			if (
				"object" == typeof Reflect &&
				"function" == typeof Reflect.decorate
			)
				s = Reflect.decorate(t, e, n, r);
			else
				for (var l = t.length - 1; l >= 0; l--)
					(o = t[l]) &&
						(s =
							(i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
			return i > 3 && s && Object.defineProperty(e, n, s), s;
		},
		h = (function (n) {
			function r(t) {
				var e =
					n.call(this, "project-list", "app", !1, t + "-projects") ||
					this;
				return (
					(e.type = t),
					(e.assignedProjects = []),
					e.configure(),
					e.renderContent(),
					e
				);
			}
			return (
				f(r, n),
				(r.prototype.dragOverHandler = function (t) {
					t.dataTransfer &&
						"text/plain" === t.dataTransfer.types[0] &&
						(t.preventDefault(),
						this.element
							.querySelector("ul")
							.classList.add("droppable"));
				}),
				(r.prototype.dropHandler = function (t) {
					var n = t.dataTransfer.getData("text/plain");
					i.moveProject(
						n,
						"active" === this.type ? e.Active : e.Finished
					);
				}),
				(r.prototype.dragLeaveHandler = function (t) {
					this.element
						.querySelector("ul")
						.classList.remove("droppable");
				}),
				(r.prototype.configure = function () {
					var t = this;
					this.element.addEventListener(
						"dragover",
						this.dragOverHandler
					),
						this.element.addEventListener(
							"dragleave",
							this.dragLeaveHandler
						),
						this.element.addEventListener("drop", this.dropHandler),
						i.addListener(function (n) {
							var r = n.filter(function (n) {
								return "active" === t.type
									? n.status === e.Active
									: n.status === e.Finished;
							});
							(t.assignedProjects = r), t.renderProjects();
						});
				}),
				(r.prototype.renderContent = function () {
					var t = this.type + "-projects-list";
					(this.element.querySelector("ul").id = t),
						(this.element.querySelector("h2").textContent =
							this.type.toUpperCase() + " PROJECTS");
				}),
				(r.prototype.renderProjects = function () {
					document.getElementById(
						this.type + "-projects-list"
					).innerHTML = "";
					for (
						var t = 0, e = this.assignedProjects;
						t < e.length;
						t++
					) {
						var n = e[t];
						new p(this.element.querySelector("ul").id, n);
					}
				}),
				d([t], r.prototype, "dragOverHandler", null),
				d([t], r.prototype, "dropHandler", null),
				d([t], r.prototype, "dragLeaveHandler", null),
				r
			);
		})(l);
	new c(), new h("active"), new h("finished");
})();
