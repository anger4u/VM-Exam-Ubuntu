<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 */

//one css for all system.auth.* forms
$APPLICATION->SetAdditionalCSS("/bitrix/css/main/system.auth/flat/style.css");
?>

<div class="bx-authform">

<?if(!empty($arParams["~AUTH_RESULT"])):?>
	<div class="alert <?=($arParams["~AUTH_RESULT"]["TYPE"] == "OK"? "alert-success":"alert-danger")?>"><?=htmlspecialcharsbx($arParams["~AUTH_RESULT"]["MESSAGE"])?></div>
<?endif?>

	<h3 class="bx-title"><?=GetMessage("AUTH_GET_CHECK_STRING")?></h3>

	<p class="bx-authform-content-container"><?=GetMessage("AUTH_FORGOT_PASSWORD_1")?></p>

	<form name="bform" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>">
<?if($arResult["BACKURL"] <> ''):?>
		<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
<?endif?>
		<input type="hidden" name="AUTH_FORM" value="Y">
		<input type="hidden" name="TYPE" value="SEND_PWD">

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><?echo GetMessage("AUTH_LOGIN_EMAIL")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_LOGIN" maxlength="255" value="<?=$arResult["LAST_LOGIN"]?>" />
				<input type="hidden" name="USER_EMAIL" />
			</div>
		</div>

		<div class="bx-authform-formgroup-container">
			<input type="submit" class="btn btn-primary" name="send_account_info" value="<?=GetMessage("AUTH_SEND")?>" />
		</div>

		<div class="bx-authform-link-container">
			<a href="<?=$arResult["AUTH_AUTH_URL"]?>"><b><?=GetMessage("AUTH_AUTH")?></b></a>
		</div>

	</form>

</div>

<script type="text/javascript">
document.bform.onsubmit = function(){document.bform.USER_EMAIL.value = document.bform.USER_LOGIN.value;};
document.bform.USER_LOGIN.focus();
</script>
