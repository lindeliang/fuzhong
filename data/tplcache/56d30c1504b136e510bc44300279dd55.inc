<div class="business__banner__text__item[field:global runphp='yes' name=autoindex]
                      $a="";
                        $b=" business__banner__text__item--active";
                        if ((@me%1)==0 && @me!=1)  @me=$a;
                        else  @me=$b;
                        [/field:global]">
                <h3 class="business__banner__text__item__title"> [field:title/] </h3>
                <p class="business__banner__text__item__content"> [field:description function="cn_substr(@me,300)"/]</p>
              </div>