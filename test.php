<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test");
?>

<?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.form",
	"",
	Array(
		"COMPONENT_TEMPLATE" => ".default",
		"REGISTER_URL" => "/login/register.php",
		"FORGOT_PASSWORD_URL" => "/login/",
		"PROFILE_URL" => "/login/user.php",
		"SHOW_ERRORS" => "N"
	)
);?><br>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>