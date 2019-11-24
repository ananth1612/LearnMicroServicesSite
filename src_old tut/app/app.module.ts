import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//<!-- import { AlertModule } from '@ng-bootstrap/ng-bootstrap';-->


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { AwsComponent } from './aws/aws.component';
import { JavawithawsComponent } from './javawithaws/javawithaws.component';
import { DevopsComponent } from './devops/devops.component';
import { AwsdevopsComponent } from './awsdevops/awsdevops.component';
import { UsefullinksComponent } from './usefullinks/usefullinks.component';
import { JavaintroComponent } from './java/javaintro/javaintro.component';
import { TemplateComponent } from './template/template.component';
import { MenuComponent } from './template/menu/menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { AwsmenuComponent } from './template/menu/awsmenu/awsmenu.component';
import { JavamenuComponent } from './template/menu/javamenu/javamenu.component';
import { AwsdevopsmenuComponent } from './template/menu/awsdevopsmenu/awsdevopsmenu.component';
import { DevopsmenuComponent } from './template/menu/devopsmenu/devopsmenu.component';
import { JavawithawsmenuComponent } from './template/menu/javawithawsmenu/javawithawsmenu.component';
import { JdkJreJvmComponent } from './java/jdk-jre-jvm/jdk-jre-jvm.component';
import { JavaClasspathComponent } from './java/java-classpath/java-classpath.component';
import { JavaVariablesComponent } from './java/java-variables/java-variables.component';
import { OperatorsInJavaComponent } from './java/operators-in-java/operators-in-java.component';
import { AwsintroComponent } from './aws/awsintro/awsintro.component';
import { JavawithawsmenuIntroComponent } from './javawithaws/javawithawsmenu-intro/javawithawsmenu-intro.component';
import { DevopsintroComponent } from './devops/devopsintro/devopsintro.component';
import { AwsdevopsintroComponent } from './awsdevops/awsdevopsintro/awsdevopsintro.component';
import { JavaKeywordsComponent } from './java/java-keywords/java-keywords.component';
import { DataTypesComponent } from './java/data-types/data-types.component';
import { PrimitiveDataTypesInJavaComponent } from './java/primitive-data-types-in-java/primitive-data-types-in-java.component';
import { JavaWrapperClassesComponent } from './java/java-wrapper-classes/java-wrapper-classes.component';
import { TypesOfStatementsInJavaComponent } from './java/types-of-statements-in-java/types-of-statements-in-java.component';
import { ControlFlowStatementsComponent } from './java/control-flow-statements/control-flow-statements.component';
import { JavaStringComponent } from './java/java-string/java-string.component';
import { ClassInJavaComponent } from './java/class-in-java/class-in-java.component';
import { MainMethodComponent } from './java/main-method/main-method.component';
import { JavaCommentsComponent } from './java/java-comments/java-comments.component';
import { JavaHashcodeEqualsMethodsComponent } from './java/java-hashcode-equals-methods/java-hashcode-equals-methods.component';
import { JavaSystemPropertiesComponent } from './java/java-system-properties/java-system-properties.component';
import { JavaIsPassByValueLetsSeeHowComponent } from './java/java-is-pass-by-value-lets-see-how/java-is-pass-by-value-lets-see-how.component';
import { JavaComputingArchitectureComponent } from './java/java-computing-architecture/java-computing-architecture.component';
import { DifferenceBetweenJavaExeAndJavawExeComponent } from './java/difference-between-java-exe-and-javaw-exe/difference-between-java-exe-and-javaw-exe.component';
import { BytecodeForAJavaClassFileComponent } from './java/bytecode-for-a-java-class-file/bytecode-for-a-java-class-file.component';
import { LittleEndianAndBigEndianInJavaComponent } from './java/little-endian-and-big-endian-in-java/little-endian-and-big-endian-in-java.component';
import { CorrectlyCompareFloatDoubleComponent } from './java/correctly-compare-float-double/correctly-compare-float-double.component';
import { StaticImportDeclarationsInJavaComponent } from './java/static-import-declarations-in-java/static-import-declarations-in-java.component';
import { InternalCachingInWrapperClassesComponent } from './java/internal-caching-in-wrapper-classes/internal-caching-in-wrapper-classes.component';
import { AngularinterquestComponent } from './angularinterquest/angularinterquest.component';
import { AngIntQustMenuComponent } from './template/menu/ang-int-qust-menu/ang-int-qust-menu.component';
import { BootmicromenuComponent } from './template/menu/bootmicromenu/bootmicromenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    AwsComponent,
    JavawithawsComponent,
    DevopsComponent,
    AwsdevopsComponent,
    UsefullinksComponent,
    
    TemplateComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    AwsmenuComponent,
    JavamenuComponent,
    AwsdevopsmenuComponent,
    DevopsmenuComponent,
    JavawithawsmenuComponent,
    
    AwsintroComponent,
    JavawithawsmenuIntroComponent,
    DevopsintroComponent,
    AwsdevopsintroComponent,
    AngularinterquestComponent,
    AngIntQustMenuComponent,
    BootmicromenuComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
