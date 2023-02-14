$(document).ready(function() {
	var a = $(window).width();
	if ($(window).resize(function() {
					var o = $(window).width();
					a != o && location.reload()
			}), a < 768) {
			$(".nav-link").on("click", function() {
					$("#link-of-nav").removeClass("show"), $("span#nav-icon").addClass("fa-hamburger").removeClass("fa-times")
			}), $(window).on("scroll", function() {
					$("#link-of-nav").removeClass("show"), $("span#nav-icon").addClass("fa-hamburger").removeClass("fa-times")
			});
			o = 98
	} else var o = 90;
	$(".navbar-toggler").click(function() {
			$(".navbar-toggler #nav-icon").toggleClass("fa-hamburger fa-times")
	}), $(window).on("load scroll resize", function() {
			var a = $(window).scrollTop(),
					i = $("#about").offset().top,
					n = $("#special").offset().top,
					s = $("#dishes").offset().top,
					t = $("#contact").offset().top,
					e = i * o / 100,
					l = (n - i) * o / 100 + i,
					r = (s - n) * o / 100 + n,
					c = (t - s) * o / 100 + s;
			a < e ? ($(".navbar-nav li:first-of-type a").addClass("nav-active"), $(".navbar-nav li:first-of-type").siblings().children().removeClass("nav-active")) : a >= e && a < l ? ($(".navbar-nav li:nth-of-type(2) a").addClass("nav-active"), $(".navbar-nav li:nth-of-type(2)").siblings().children().removeClass("nav-active")) : a >= l && a < r ? ($(".navbar-nav li:nth-of-type(3) a").addClass("nav-active"), $(".navbar-nav li:nth-of-type(3)").siblings().children().removeClass("nav-active")) : a >= r && a < c ? ($(".navbar-nav li:nth-of-type(4) a").addClass("nav-active"), $(".navbar-nav li:nth-of-type(4)").siblings().children().removeClass("nav-active")) : ($(".navbar-nav li:nth-of-type(5) a").addClass("nav-active"), $(".navbar-nav li:nth-of-type(5)").siblings().children().removeClass("nav-active"))
	});
	var i = $("nav").outerHeight();
	$("#body > section , #body > footer").css({
			paddingTop: i + 5
	}), $(".dots:first-child").click(function() {
			$(".vid:first-child").show().siblings().hide()
	}), $(".dots:nth-child(2)").click(function() {
			$(".vid:nth-child(2)").show().siblings().hide()
	}), $(".dots:last-child").click(function() {
			$(".vid:last-child").show().siblings().hide()
	}), $(".dots").click(function() {
			$(this).addClass("d-active").siblings().removeClass("d-active")
	}), $(window).on("load scroll", function() {
			$(window).scrollTop() > 25 ? $("#up-arrow").show() : $("#up-arrow").fadeOut()
	}), AOS.init({
			duration: 1e3,
			delay: 150
	});
	var n = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(n).forEach(function(a) {
			a.addEventListener("submit", function(o) {
					a.checkValidity() || (o.preventDefault(), o.stopPropagation()), a.classList.add("was-validated")
			}, !1)
	}), $("textarea , .form-control").on({
			focus: function() {
					$(this).prev().css({
							transform: "translateY(0%)",
							color: "#fff200"
					}), $(this).css({
							"background-color": "rgba(1, 1, 1, 0.75)",
							borderColor: "#fff200",
							boxShadow: "0px 0px 1px 0rem rgba(255,242,0,.9)"
					})
			},
			blur: function() {
					0 === $(this).val().length ? ($(this).prev().css({
							transform: "translateY(155%)",
							color: "white"
					}), $(this).css({
							"background-color": "rgba(1, 1, 1, 0.45)",
							borderColor: "white",
							boxShadow: "initial"
					})) : ($(this).prev().css({
							transform: "translateY(0%)",
							color: "#fff200"
					}), $(this).css({
							"background-color": "rgba(1, 1, 1, 0.75)",
							borderColor: "#fff200",
							boxShadow: "0px 0px 1px 0rem rgba(255,242,0,.9)"
					}))
			}
	}), $("#cover").hide(), $("#body").css("opacity", "1"),
	$("#up-arrow").click(function () { $("body , html").animate({ scrollTop: 0 }, 100) })
});